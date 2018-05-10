import React from 'react'
import {Switch, Route} from 'react-router-dom'

import RecentPosts from './RecentPosts'
import TestPost from './TestPost'

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={RecentPosts} />
            <Route exact path='/Post' component={TestPost}/>
        </Switch>
    </main> 
)

export default Router