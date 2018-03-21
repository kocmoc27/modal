import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button } from "./src";
import propTypes from "prop-types";
/* 
1. написать callback
2. 
 */

export default class App extends Component {
  static propTypes = {
    data: propTypes.array,
    selectedItems: propTypes.array
  };
  constructor(props) {
    super(props);
    const data =
      this.props.data != undefined
        ? this.props.data
        : ["Новое и актуальное", "Новое и актуальное", "Новое и актуальное"];
    const selectedItems =
      this.props.selectedItems != undefined
        ? this.props.selectedItems
        : data.map(() => false);
    this.state = {
      data: data,
      selectedItems: selectedItems
    };
  }

  getAttributes() {
    args = [];
    this.state.data.map((value, index) => {
      args.push({
        text: value,
        id: index,
        selected: this.state.selectedItems[index]
      });
    });
    return args;
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Какие темы подборок вам наиболее интересны?
            </Text>
          </View>

          <ScrollView style={styles.list}>
            {this.state.data.map((element, index) => (
              <TouchableOpacity
                style={styles.chBox}
                onPress={() => {
                  newSelectedItems = this.state.selectedItems;
                  newSelectedItems[index] = !newSelectedItems[index];
                  this.setState({ selectedItems: newSelectedItems });
                }}
              >
                <View style={styles.chBoxIn}>
                  {" "}
                  {!this.state.selectedItems[index] ? null : (
                    <View style={styles.chBoxFill} />
                  )}{" "}
                </View>
                <View style={styles.chBoxTextBlock}>
                  {" "}
                  <Text style={styles.chBoxText}>{element}</Text>{" "}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.buttonWrap}>
            <TouchableOpacity
              onPress={() => {
                this.props.onPress(this.getAttributes.bind(this));
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Выбрать</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  body: {
    flex: 1,
    paddingTop: 55,
    paddingLeft: 10,
    paddingBottom: 80,
    paddingRight: 10,
    backgroundColor: "#222"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
    borderStyle: "solid",
    borderColor: "yellow",
    borderWidth: 3,
    borderRadius: 8
  },

  header: {
    marginTop: 15,
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  },

  list: {
    flex: 6,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10
  },
  chBox: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10
  },
  chBoxIn: {
    width: 18,
    height: 18,
    padding: 2,
    borderStyle: "solid",
    borderColor: "yellow",
    borderWidth: 2
  },
  chBoxFill: {
    width: 9,
    height: 9,
    backgroundColor: "yellow"
  },
  chBoxTextBlock: { marginLeft: 15 },
  chBoxText: {
    color: "#fff",
    fontSize: 14
  },

  buttonWrap: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    paddingRight: 10
  },
  button: {
    padding: 15,
    borderStyle: "solid",
    borderColor: "yellow",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "#fff"
  }
};
