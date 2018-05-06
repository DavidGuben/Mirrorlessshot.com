import React from 'react'
import {Switch, Route} from 'react-router-dom'

import RecentPosts from './RecentPosts'
import TestPost from './TestPost'
import Modal from './Modal'

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={RecentPosts} />
            <Route exact path='/Post' component={TestPost}/>
            <Route exact path='/Modal' component={Modal} />
        </Switch>
    </main> 
)

export default Router