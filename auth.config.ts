import { AuthError, NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { cookies } from 'next/headers';

const authConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    }),
    CredentialProvider({
      credentials: {
        email: {
          type: 'email',
          label: 'email',
          placeholder: 'demo@demo.com'
        },
        password: {
          type: 'password',
          label: 'Password',
          placeholder: '********'
        }
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials?.email as string,
          password: credentials?.password as string
        };

        const res = await fetch(`${process.env.API_BASE_URL}/auth/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        const user = data.user;
        console.log('Uswer ===== >', user);
        console.log('res ===== >', res);
        if (!res.ok || data.success === false) {
          return null;
          // throw new AuthError(data.message);
        }
        if (data.success == true && user) {
          const prefix = process.env.NODE_ENV === 'development' ? '__DEV-' : '';
          cookies().set(`${prefix}token`, data.token);
        }
        return user;
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  pages: {
    signIn: '/' //sigin page
  },
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = auth?.user;
    //   const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
    //   if (isOnDashboard) {
    //     if (isLoggedIn) return true;
    //     return false; // Redirect unauthenticated users to login page
    //   } else if (isLoggedIn) {
    //     return Response.redirect(new URL('/dashboard', nextUrl));
    //   }
    //   return true;
    // }

    // async jwt({ user, account }) {
    //   console.log('JWT ===== >', user, account)
    //   if (account && user) {
    //     token.id = user.id
    //     token.accessToken = token
    //     token.role = user.role
    //   }
    //   const { refreshToken, ...rest } = token
    //   return rest
    // },

    async session({ session, token }) {
      console.log('session => ', session);

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          email: token.email as string,
          cognitoGroups: token.cognitoGroups as string[],
          accessToken: token.accessToken as string,
          accessTokenExpires: token.accessTokenExpires as number,
          role: token.role as string
        },
        error: token.error
      };
    },
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      console.log('auth => ', auth);
      // const privateRoutes = ['admin']
      // // get the route name from the url such as "/about"
      // const searchTerm = request.nextUrl.pathname.split("/").slice(0, 2).join("/")

      // // if the private routes array includes the search term, we ask authorization here and forward any unauthorized users to the login page
      // if (privateRoutes.includes(searchTerm)) {
      //   console.log(`${!!auth ? "Can" : "Cannot"} access private route ${searchTerm}`)
      //   return !!auth
      //   // if the pathname starts with one of the routes below and the user is already logged in, forward the user to the home page
      // } else if (pathname.startsWith("/login") || pathname.startsWith("/forgot-password") || pathname.startsWith("/signup")) {
      //   const isLoggedIn = !!auth

      //   if (isLoggedIn) {
      //     return Response.redirect(new URL("/", request.nextUrl))
      //   }

      //   return true
      // }

      return true;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development'
} satisfies NextAuthConfig;

export default authConfig;
