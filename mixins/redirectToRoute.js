export default {
    data() {
        return {
          isActive: false,
          isLogout: false,
          logoutPath: '/auth/logout',
          loginPath: '/auth/login',
          path: this.$nuxt.$route.path,
          isNavbarTransparent: false
        }
      },
    methods:{
        async redirectToRoute(route, hideMenu = false) {
            this.isLogout = false
            if (route && route.match(this.logoutPath)) {
              this.isLogout = true
              await this.$apolloHelpers.onLogout()
              this.logout()
              return this.$router.push('/auth/login')
            }
            this.$router.push({ path: route })
            // if (hideMenu) this.handelActive()
          }
    } 
}