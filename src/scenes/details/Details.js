import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AgendaUrgente from 'components/AgendaUrgente'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blanco,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Articles = { agenda_urgente: <AgendaUrgente /> }

const Details = ({ navigation }) => {
  const { articleKey } = navigation.state.params

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{`AGENDA URGENTE`}</Text>
      <ScrollView>
        {
          articleKey == 'agenda_urgente' ? <AgendaUrgente /> : <Text></Text>
          //You can add more Article components here
          //Leave the empty <Text> as last always (default)
        }
      </ScrollView>
    </View>
  )
}

Details.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default Details
