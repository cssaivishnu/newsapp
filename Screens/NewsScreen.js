import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../API/Context'

const NewsScreen = () => {
  const { news: { articles }, } = useContext(NewsContext);
  return (
    <View>
      <Text>NewsScreen</Text>
    </View>
  )
}

export default NewsScreen