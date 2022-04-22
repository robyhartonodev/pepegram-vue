import { Middleware } from '@nuxt/types'
import { getAuth } from 'firebase/auth'

const guestMiddleware: Middleware = ({ redirect }) => {
  const auth = getAuth()
  const currentUser = auth.currentUser

  if (currentUser) {
    redirect(302, '/')
  }
}

export default guestMiddleware
