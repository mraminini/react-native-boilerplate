import PropTypes from 'prop-types'
import React from 'react'
import {
  StyleSheet,
  // Image,
  Text,
  View,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AButton from '../ALugaroButton'
import TownInfo from '../TownInfo'
import { colors } from 'theme'

const deviceSize = Dimensions.get('window')

// const candidatxs = mvcdb.candidatxs
const styles = StyleSheet.create({
  holder: {
    flex: 1, //must
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
  bholder: {
    backgroundColor: colors.black,
    height: 60,
    marginBottom: 20,
  },
  candName: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 30,
  },
  townNameModal: {
    fontSize: 38,
    color: colors.black,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    textAlign: 'right',
  },
  candTitle: {
    alignSelf: 'flex-end',
    fontSize: 12,
    marginEnd: 10,
  },
  candTitleModal: {
    alignSelf: 'flex-end',
    fontSize: 16,
  },
  candidatureBar: {
    alignSelf: 'flex-end',
    width: '100%',
    backgroundColor: colors.victoryGold,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingRight: 5,
  },
  candidatureBarModal: {
    alignSelf: 'center',
    height: 34,
    alignContent: 'flex-end',
    justifyContent: 'center',
    textAlign: 'right',
    width: deviceSize.width * 0.98,
    backgroundColor: colors.victoryGold,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 10,
    marginBottom: 15,
    elevation: 5,
  },
  separator: {
    alignSelf: 'center',
    height: 25,
    backgroundColor: colors.white,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  townSVGDim: {
    width: 75,
    height: 75,
  },
  modalView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export default class TownTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalActive: false,
      townKey: props.townKey,
      town: mvcdb.pueblos.find((t) => {
        return t.key == props.townKey
      }),
    }
  }

  render() {
    return (
      <View style={styles.holder}>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              ...this.state,
              isModalActive: true,
            })
          }}
        >
          <View style={styles.profileRow}>
            <View style={styles.profilePic}>
              <Text style={styles.candName}>{this.state.town.name}</Text>
            </View>
          </View>
          <Text />
        </TouchableOpacity>
        <Modal
          fullScreen={false}
          animationType="fade"
          transparent={false}
          visible={this.state.isModalActive}
        >
          <View style={styles.holder}>
            {Platform.OS === 'ios' && <View style={styles.separator} />}
            <View>
              <Text style={styles.townNameModal}>{this.state.town.name}</Text>
            </View>
            <ScrollView
              onScroll={(n) => {
                this.setState({
                  ...this.state,
                  isModalBackButtonActive: true,
                })
              }}
            >
              <View style={styles.modalView}>
                <TownInfo townKey={this.state.townKey} />
              </View>
            </ScrollView>
            {this.state.isModalBackButtonActive && (
              <View style={styles.bholder}>
                <AButton
                  title="Regresar"
                  onPress={() => {
                    this.setState({
                      ...this.state,
                      isModalActive: false,
                    })
                  }}
                />
              </View>
            )}
          </View>
        </Modal>
      </View>
    )
  }
}
TownTile.propTypes = {
  townKey: PropTypes.string,
}

TownTile.defaultProps = {
  townKey: '',
}
