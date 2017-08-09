let io = require('socket.io-client');
let assert = require('assert');
let should = require('should');

//
//	1.	Our server
//
let socketURL = 'http://192.168.56.100:3050';

//
//	Basic options
//
let options = {
	transports: ['websocket']
}

//
//	Start the dance 💃
//
describe("Chat Server", function() {

	//
	//	This first check is responsabile to see if the first message is the
	//	right one, because you know it is soooo important ;)
	//
	it('The first default message', function(done) {

		//
		//	1.	Create a Socket.io object
		//
		var client2 = io.connect(socketURL, options);

		//
		//	2.	Connect to the server
		//
		client2.on('connect', function(data) {

			//
			//	1.	First we need to join a room
			//
			client2.emit('new_room', 'top_secret');

			//
			//	2.	Then we listen to messages coming in
			//
			client2.on('message', function(msg) {

				//
				//	1.	We hope for the first message to be correct
				//
				msg.body.should.equal("Hello");

				//
				//	->	And we are done
				//
				done();

			});

		});

	});

	//
	//	Hopefully the first message was successful so now it is time to send
	//	a custom message and see if what we send is what we get
	//
	it('Should send and receive the same message', function(done) {

		//
		//	1.	Create a Socket.io object
		//
		var client1 = io.connect(socketURL, options);
		var client2 = io.connect(socketURL, options);

		//
		//	2.	Connect to the server
		//
		client2.on('connect', function(data) {

			//
			//	1.	Join the default room
			//
			client2.emit('new_room', 'top_secret');

		});

		//
		//	3. Connect to the server
		//
		client1.on('connect', function(data) {

			//
			//	1.	Join the default room
			//
			client1.emit('new_room', 'top_secret');

		});

		//
		//	4.	This variable is used to keep count of how many messages we get
		//
		let message_count = 0;

		//
		//	5.	Setup a listener for incoming messages
		//
		client2.on('message', function(msg) {

			//
			//	1.	Increment the message count when we get one
			//
			message_count++;

			//
			//	2.	Once we receive the 3th and last message from the default
			//		history pool, this is where we attack, and send our custom
			//		message.
			//
			if(message_count === 3)
			{
				//
				//	1.	Custom message
				//
				var obj = {
					name: "bob",
					message: "ola",
					room: "top_secret"
				};

				//
				//	-> FIRE!!!!
				//
				client1.emit('message', obj);
			}

			//
			//	3.	After receiving the 3 default messages, we can finally
			//		react to our custom one.
			//
			if(message_count === 4)
			{
				//
				//	1.	Make sure our custom message is what we actually sent
				//
				msg.body.should.equal("ola");

				//
				//	->	And... scene.
				//
				done();
			}

		});

	});

});