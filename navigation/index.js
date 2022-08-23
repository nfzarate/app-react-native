import {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthNavigation from './authNavigation'
import {useSelector} from 'react-redux'

const MainNavigation = () => {

  const userId = useSelector(state => state.auth.userId);
  
  return (
    <NavigationContainer>
    { userId ?
      <TabNavigator />
      :
      <AuthNavigation/>
    }
    </NavigationContainer>
  )
}

export default MainNavigation