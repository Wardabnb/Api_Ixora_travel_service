// passport-setup.js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./db"); // Importer le modèle User

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// Configurer la stratégie Google
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "18156850824-r8a2q546pgirt6ptq9ccnifofommig8j.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      // Créer un nouvel utilisateur
      const newUser = await new User({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value,
        image: profile.photos[0].value,
      }).save();
      done(null, newUser);
    }
  )
);
