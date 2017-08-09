let http = require('http');
let redis = require('socket.io-redis');
let cluster = require('cluster');

//
//	IF 		The process is the master one, we are the one that controls
//			everything
//
//	ELSE 	As the child process we are the one responsible for the app
//			itself.
//
if(cluster.isMaster)
{

	//
	//	-> Show the Redis server URL for convenience.
	//
	console.log("The Redis server URL is: \t" + process.env.REDIS_URL)
	console.log("The Server PORT is: \t" + process.env.PORT)
	console.log("___________________________________________________")

	//
	//	1.	As a good measure we spawn 2 processes
	//
	cpu_count = 2;

	//
	//	2.	Fork the app until we can
	//
	while(cpu_count--)
	{
		cluster.fork();
	}

	//
	//	3.	Spawn a new process in place every time on app crashes.
	//
	cluster.on('exit', function (worker) {

		//
		//	1.	Replace the dead worker.
		//
		cluster.fork();

		//
		//	->	Log what happened
		//
		console.log('Worker %d died :(', worker.id);

	});
}
else
{
	//
	//	1.	Create a HTTP server so Socket IO can attach to it.
	//
	let server = http.createServer();

	//
	//	2.	Initialize the Socket IO module and attach it to the HTTP server
	//		that we just created
	//
	let io = require('socket.io')(server);

	//
	//	3.	Start the server and make it listen on a specific port
	//
	server.listen(process.env.PORT || 3000);

	//
	//	4.	Tell Socket IO how it should store its memory. In this case we want
	//		to use a Redis server as the main memory so we can share the memory
	//		among multiple processes.
	//
	//		This way we can scale the server alone on to multiple machines,
	//		while keeping the memory of the app in one place.
	//
	io.adapter(redis(process.env.REDIS_URL));

	//
	//	5.	Listen for client connections
	//
	//		IMPORTANT:
	//
	//			Each client gets an private instance of this.
	//
	//			- socket: is the user
	//			- io: is everybody
	//
	io.on('connection', function(socket) {

		//
		//	@@	Listen to emission related to the creation of a new room.
		//		When such emission happens, then we join the room that the
		//		user requested
		//
		socket.on('new_room', function(room) {

			//
			//	1.	Join the room that the browser requested
			//
			socket.join(room);

			//
			//	2.	A fun history, just to initiate the room with some data
			//
			let history = [
				{
					date: 1502343862000,
					body: "Hello",
					name: "Bob"
				},
				{
					date: 1502171062000,
					body: "Hi",
					name: "Tif"
				},
				{
					date: 1502261062000,
					body: "Sup",
					name: "Tom"
				}
			]

			//
			//	3.	Loop over the history, and send it to whoever connected
			//		to the room.
			//
			history.forEach(function(data) {

				//
				//	->	Emit one message
				//
				socket.emit('message', data);

			})

		});

		socket.on('message', function(data) {

			//
			//	1.	Format the data that we received by add also the time
			//		the message was received
			//
			let msg = {
				date: new Date(),
				body: data.message,
				name: data.name
			}

			//
			//	2.	Blast the message to everyone in the room
			//
			io.to(data.room).emit('message', msg);

		});

		//
		//	->	Log each connection for fun :)
		//
		console.log("Connected to worker %d", cluster.worker.id)

	});

	//
	//	->	Show how many workers did spawn.
	//
	console.log("Worker %d is alive.", cluster.worker.id);
}