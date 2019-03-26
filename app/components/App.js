var React = require('react')
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch

var Header = require('./Header')
var Search = require('./Search')

class App extends React.Component {
    render () {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Search} />
                        <Route render={function () { return <p>not found</p>}} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App