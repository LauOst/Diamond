import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// piniaPersist(ζδΉε)
const store = createPinia()
store.use(piniaPluginPersistedstate)

export default store
