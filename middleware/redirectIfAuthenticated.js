export default function ({store, redirect}) {
  if (store.user.authenticated) {
    return redirect({
      name: 'index'
    })
  }
}
