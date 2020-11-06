2020-11-05T11:13:07.184096+00:00 app[web.1]: at /app/node_modules/mongodb/lib/core/connection/pool.js:995:11
2020-11-05T11:13:07.184097+00:00 app[web.1]: at /app/node_modules/mongodb/lib/core/connection/connect.js:32:7
2020-11-05T11:13:07.184097+00:00 app[web.1]: at callback (/app/node_modules/mongodb/lib/core/connection/connect.js:280:5)
2020-11-05T11:13:07.184097+00:00 app[web.1]: at Socket.<anonymous> (/app/node_modules/mongodb/lib/core/connection/connect.js:310:7)
2020-11-05T11:13:07.184098+00:00 app[web.1]: at Object.onceWrapper (events.js:421:26)
2020-11-05T11:13:07.184098+00:00 app[web.1]: at Socket.emit (events.js:314:20)
2020-11-05T11:13:07.184101+00:00 app[web.1]: at emitErrorNT (internal/streams/destroy.js:92:8)
2020-11-05T11:13:07.184102+00:00 app[web.1]: at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)
2020-11-05T11:13:07.184102+00:00 app[web.1]: at processTicksAndRejections (internal/process/task_queues.js:84:21)
2020-11-05T11:13:07.184261+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
2020-11-05T11:13:07.184387+00:00 app[web.1]: (node:23) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
2020-11-05T11:14:03.082625+00:00 heroku[web.1]: Error R10 (Boot timeout) -> Web process failed to bind to \$PORT within 60 seconds of launch
2020-11-05T11:14:03.111628+00:00 heroku[web.1]: Stopping process with SIGKILL
2020-11-05T11:14:03.234419+00:00 heroku[web.1]: Process exited with status 137
2020-11-05T11:14:03.280087+00:00 heroku[web.1]: State changed from starting to crashed
2020-11-05T17:02:04.787099+00:00 heroku[web.1]: State changed from crashed to starting
2020-11-05T17:02:09.972313+00:00 heroku[web.1]: Starting process with command `npm start`
2020-11-05T17:02:13.246235+00:00 app[web.1]:
2020-11-05T17:02:13.246260+00:00 app[web.1]: > budget-app@1.0.0 start /app
2020-11-05T17:02:13.246261+00:00 app[web.1]: > node server.js
2020-11-05T17:02:13.246261+00:00 app[web.1]:
2020-11-05T17:02:14.214838+00:00 app[web.1]: (node:23) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
2020-11-05T17:02:14.217028+00:00 app[web.1]: App running on port 3000!
2020-11-05T17:02:14.233905+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: MongoNetworkError: failed to connect to server [localhost:27017] on first connect [Error: connect ECONNREFUSED 127.0.0.1:27017
2020-11-05T17:02:14.233908+00:00 app[web.1]: at TCPConnectWrap.afterConnect [as oncomplete](net.js:1145:16) {
2020-11-05T17:02:14.233909+00:00 app[web.1]: name: 'MongoNetworkError'
2020-11-05T17:02:14.233910+00:00 app[web.1]: }]
2020-11-05T17:02:14.233914+00:00 app[web.1]: at Pool.<anonymous> (/app/node_modules/mongodb/lib/core/topologies/server.js:438:11)
2020-11-05T17:02:14.233916+00:00 app[web.1]: at Pool.emit (events.js:314:20)
2020-11-05T17:02:14.233916+00:00 app[web.1]: at /app/node_modules/mongodb/lib/core/connection/pool.js:562:14
2020-11-05T17:02:14.233917+00:00 app[web.1]: at /app/node_modules/mongodb/lib/core/connection/pool.js:995:11
2020-11-05T17:02:14.233917+00:00 app[web.1]: at /app/node_modules/mongodb/lib/core/connection/connect.js:32:7
2020-11-05T17:02:14.233918+00:00 app[web.1]: at callback (/app/node_modules/mongodb/lib/core/connection/connect.js:280:5)
2020-11-05T17:02:14.233918+00:00 app[web.1]: at Socket.<anonymous> (/app/node_modules/mongodb/lib/core/connection/connect.js:310:7)
2020-11-05T17:02:14.233918+00:00 app[web.1]: at Object.onceWrapper (events.js:421:26)
2020-11-05T17:02:14.233919+00:00 app[web.1]: at Socket.emit (events.js:314:20)
2020-11-05T17:02:14.233920+00:00 app[web.1]: at emitErrorNT (internal/streams/destroy.js:92:8)
2020-11-05T17:02:14.233921+00:00 app[web.1]: at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)
2020-11-05T17:02:14.233921+00:00 app[web.1]: at processTicksAndRejections (internal/process/task_queues.js:84:21)
2020-11-05T17:02:14.234087+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
2020-11-05T17:02:14.234202+00:00 app[web.1]: (node:23) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
2020-11-05T17:03:10.622923+00:00 heroku[web.1]: Error R10 (Boot timeout) -> Web process failed to bind to \$PORT within 60 seconds of launch
2020-11-05T17:03:10.669944+00:00 heroku[web.1]: Stopping process with SIGKILL
2020-11-05T17:03:10.874947+00:00 heroku[web.1]: Process exited with status 137
2020-11-05T17:03:10.936191+00:00 heroku[web.1]: State changed from starting to crashed
2020-11-05T22:46:22.025293+00:00 heroku[web.1]: State changed from crashed to starting
2020-11-05T22:46:27.200121+00:00 heroku[web.1]: Starting process with command `npm start`
2020-11-05T22:46:30.613413+00:00 app[web.1]:
2020-11-05T22:46:30.613441+00:00 app[web.1]: > budget-app@1.0.0 start /app
2020-11-05T22:46:30.613442+00:00 app[web.1]: > node server.js
2020-11-05T22:46:30.613442+00:00 app[web.1]:
2020-11-05T22:46:31.710087+00:00 app[web.1]: (node:23) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
2020-11-05T22:46:31.711553+00:00 app[web.1]: App running on port 3000!
2020-11-05T22:46:31.722373+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: MongoNetworkError: failed to connect to server [localhost:27017] on first connect [Error: connect ECONNREFUSED 127.0.0.1:27017
2020-11-05T22:46:31.722375+00:00 app[web.1]: at TCPConnectWrap.afterConnect [as oncomplete](net.js:1145:16) {
2020-11-05T22:46:31.722375+00:00 app[web.1]: name: 'MongoNetworkError'
2020-11-05T22:46:31.722376+00:00 app[web.1]: }]
2020-11-05T22:46:31.722377+00:00 app[web.1]: at Pool.<anonymous> (/app/node_modules/mongodb/lib/core/topologies/server.js:438:11)
2020-11-05T22:46:31.722377+00:00 app[web.1]: at Pool.emit (events.js:314:20)
2020-11-05T22:46:31.722378+00:00 app[web.1]: at /app/node_modules/mongodb/lib/core/connection/pool.js:562:14
2020-11-05T22:46:31.722378+00:00 app[web.1]: at /app/node_modules/mongodb/lib/core/connection/pool.js:995:11
2020-11-05T22:46:31.722378+00:00 app[web.1]: at /app/node_modules/mongodb/lib/core/connection/connect.js:32:7
2020-11-05T22:46:31.722379+00:00 app[web.1]: at callback (/app/node_modules/mongodb/lib/core/connection/connect.js:280:5)
2020-11-05T22:46:31.722379+00:00 app[web.1]: at Socket.<anonymous> (/app/node_modules/mongodb/lib/core/connection/connect.js:310:7)
2020-11-05T22:46:31.722380+00:00 app[web.1]: at Object.onceWrapper (events.js:421:26)
2020-11-05T22:46:31.722380+00:00 app[web.1]: at Socket.emit (events.js:314:20)
2020-11-05T22:46:31.722381+00:00 app[web.1]: at emitErrorNT (internal/streams/destroy.js:92:8)
2020-11-05T22:46:31.722381+00:00 app[web.1]: at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)
2020-11-05T22:46:31.722381+00:00 app[web.1]: at processTicksAndRejections (internal/process/task_queues.js:84:21)
2020-11-05T22:46:31.722602+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
2020-11-05T22:46:31.722733+00:00 app[web.1]: (node:23) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
2020-11-05T22:47:27.341065+00:00 heroku[web.1]: Error R10 (Boot timeout) -> Web process failed to bind to \$PORT within 60 seconds of launch
2020-11-05T22:47:27.367614+00:00 heroku[web.1]: Stopping process with SIGKILL
2020-11-05T22:47:27.510538+00:00 heroku[web.1]: Process exited with status 137
2020-11-05T22:47:27.578995+00:00 heroku[web.1]: State changed from starting to crashed
2020-11-06T01:55:43.000000+00:00 app[api]: Build started by user tajohnsonn@gmail.com
2020-11-06T01:56:09.730218+00:00 app[api]: Deploy ad916313 by user tajohnsonn@gmail.com
2020-11-06T01:56:09.730218+00:00 app[api]: Release v12 created by user tajohnsonn@gmail.com
2020-11-06T01:56:10.167059+00:00 heroku[web.1]: State changed from crashed to starting
2020-11-06T01:56:11.000000+00:00 app[api]: Build succeeded
2020-11-06T01:56:13.308743+00:00 heroku[web.1]: Starting process with command `npm start`
2020-11-06T01:56:15.961786+00:00 app[web.1]:
2020-11-06T01:56:15.961802+00:00 app[web.1]: > budget-app@1.0.0 start /app
2020-11-06T01:56:15.961803+00:00 app[web.1]: > node server.js
2020-11-06T01:56:15.961803+00:00 app[web.1]:
2020-11-06T01:56:16.493026+00:00 app[web.1]: App running on port 3000!
2020-11-06T01:56:16.515777+00:00 app[web.1]: (node:23) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
2020-11-06T01:57:13.383309+00:00 heroku[web.1]: Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch
2020-11-06T01:57:13.405298+00:00 heroku[web.1]: Stopping process with SIGKILL
2020-11-06T01:57:13.515128+00:00 heroku[web.1]: Process exited with status 137
2020-11-06T01:57:13.557560+00:00 heroku[web.1]: State changed from starting to crashed
2020-11-06T01:57:13.561302+00:00 heroku[web.1]: State changed from crashed to starting
2020-11-06T01:57:17.163964+00:00 heroku[web.1]: Starting process with command `npm start`
2020-11-06T01:57:19.545677+00:00 app[web.1]: 
2020-11-06T01:57:19.545693+00:00 app[web.1]: > budget-app@1.0.0 start /app
2020-11-06T01:57:19.545694+00:00 app[web.1]: > node server.js
2020-11-06T01:57:19.545694+00:00 app[web.1]: 
2020-11-06T01:57:20.203019+00:00 app[web.1]: App running on port 3000!
2020-11-06T01:57:20.222384+00:00 app[web.1]: (node:23) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
2020-11-06T01:57:35.940875+00:00 heroku[router]: at=error code=H20 desc="App boot timeout" method=GET path="/" host=frozen-tundra-49156.herokuapp.com request_id=e21ce8fe-b2d6-4076-93c2-49b68688f170 fwd="76.91.203.58" dyno= connect= service= status=503 bytes= protocol=https
2020-11-06T01:58:17.218793+00:00 heroku[web.1]: Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch
2020-11-06T01:58:17.240465+00:00 heroku[web.1]: Stopping process with SIGKILL
2020-11-06T01:58:17.311726+00:00 heroku[web.1]: Process exited with status 137
2020-11-06T01:58:17.357092+00:00 heroku[web.1]: State changed from starting to crashed
