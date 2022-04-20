import { Middleware } from '@nuxt/types'
import { getAuth } from 'firebase/auth'

const authMiddleware: Middleware = ({ redirect, store }) => {
  const auth = getAuth()
  const currentUser = auth.currentUser

  if (!currentUser) {
    redirect(302, '/login')
    store.dispatch('flashmessage/show', { text: 'Please sign in first to access the page!', duration: 5000, type: 'danger' })
  }
}

export default authMiddleware
