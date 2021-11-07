import { Provider } from "react-redux"
import { Router } from "./Routing"
import { store } from "./Store"

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}