// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require( 'dotenv' ).config();

// ℹ️ Connects to the database
require( './db' );

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require( 'express' );

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require( 'hbs' );

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require( './config' )( app );

// default value for title local
const capitalize = require( './utils/capitalize' );
const projectName = 'workout-tracker';

app.locals.appTitle = `${capitalize( projectName )} created with IronLauncher`;

// Configue Session
const session = require( 'express-session' );
const MongoStore = require( 'connect-mongo' );
app.use( session(
	{
		secret: process.env.SESSION_SECRET,
		cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
		resave: true,
		saveUninitialized: true,
		store: MongoStore.create(
			{
				mongoUrl: process.env.MONGODB_URI,
			},
		),
	},
) );

// 👇 Start handling routes here
const indexRoutes = require( './routes/index.routes' );
const authRoutes = require( './routes/auth.routes' );
const homeRoutes = require( './routes/home.routes' );
const trackerRoutes = require( './routes/tracker.routes' );
// const statisticsRoutes = require( './routes/statistics.routes' );
app.use( '/', indexRoutes );
app.use( '/', authRoutes );
app.use( '/', homeRoutes );
app.use( '/', trackerRoutes );
// app.use( '/', statisticsRoutes );

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require( './error-handling' )( app );

module.exports = app;
