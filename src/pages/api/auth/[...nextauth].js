import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

export default NextAuth({
  providers: [
    SpotifyProvider({
      authorization:
      'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-modify-private',
      clientId: 'cbe1cb5e313c4b2c9ea931248714a358',
      clientSecret: '00d0eb9da15542f098af0777f38629e8',
    }),
  ],
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.refresh_token;
      }
      return token;
    },
    async session(session, user) {
      session.user = user;
      return session;
    }
  }
})