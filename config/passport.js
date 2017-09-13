var md5 = require('md5');
var LocalStrategy   = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
// expose this function to our app using module.exports
module.exports = function(passport,admin, user) {
    var Admin = admin;

    var opts = {};
    
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('jwt');
    opts.secretOrKey = 'W$q4=25*8%v-}UW';
    
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(admin, done) {
        done(null, admin.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        Admin.findById(id).then(function(admin) {
 
        if (admin) {
 
            done(null, admin.get());
 
        } else {
 
            done(admin.errors, null);
 
        }
 
        });
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form
            
            var Admin = admin;
 
            var isValidPassword = function(userpass, password) {
                return  md5(password) == userpass;
                
            }

            Admin.findOne({
            where: {
                email: email
            }
            }).then(function(admin) {
     
                if (!admin) {
                    
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
     
                }
     
                if (!isValidPassword(admin.password, password)) {
                    
                    return done(null, false, req.flash('loginMessage', 'Oops wrong password.'));
     
                }
     
     
                var userinfo = admin.get();
                return done(null, userinfo);
     
     
            }).catch(function(err) {
     
                console.log("Error:", err);
     
                return done(null, false, req.flash('loginMessage', 'Something wrong.Please try again.'));
     
            });
        }
        ));

        passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
            
            user.findAll({
                where: {
                    id: jwt_payload[0].id
                }
            }).then(function(user){
                if (user.length > 0) {
                      done(null, user);
                } else {
                  done(null, false);
                }
            });
        }));
};