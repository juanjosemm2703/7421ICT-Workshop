import { StyleSheet, View } from 'react-native';
import { Board } from "../components/Board";
import { TButton } from '../components/TButton';
import COLOR from '../constants/color';
import { Title } from '../components/Title';
import { useEffect, useState } from 'react';
import { changePlayer, sortTicTacToe, ticTacToeArray, checkWinner, rearrangeBoard, backWard, forward, checkGameCondition } from '../datamodel/game';

export const Home = () => {
  const [tictactoe, setTictactoe] = useState(ticTacToeArray);
  const [player, setPlayer] = useState("");
  const [winner, setWinner] = useState("");
  const [movement, setMovement] = useState([]);

  useEffect(() => {
    const newBoard = sortTicTacToe(tictactoe, movement);
    setTictactoe(newBoard);
    const newWinner = checkWinner(movement);
    setWinner(newWinner);
    const newPlayer = changePlayer(player)
    setPlayer(newPlayer);
    ;
  }, [movement]);

  const changeBoard = (index) => {
    const movements = rearrangeBoard(winner, player, index, movement);
    setMovement(movements);
  }

  const resetBoard = () => {
    setMovement([]);
    setPlayer("");
  }

  const undoBoard = () => {
    const movements = backWard(movement);
    setMovement(movements);
  }

  const redoBoard = () => {
    const movements = forward(movement);
    setMovement(movements);
  }

  return (
    <View style={styles.container}>
      <Title title="Tic Tac Toe" />
      {
        <View style={styles.buttonContainer}>

          <TButton title="<"
            disabled={!checkGameCondition(movement).backWard} backgroundColor={!checkGameCondition(movement).backWard ? COLOR.DARKGRAY : undefined}
            onPress={undoBoard} />

          <TButton title="New Game"
            disabled={!checkGameCondition(movement).reset} backgroundColor={!checkGameCondition(movement).reset ? COLOR.DARKGRAY : undefined}
            onPress={resetBoard} />

          <TButton title=">"
            disabled={!checkGameCondition(movement).forward} backgroundColor={!checkGameCondition(movement).forward ? COLOR.DARKGRAY : undefined}
            onPress={redoBoard} />

        </View>
      }
      <Board tictactoe={tictactoe} onPress={changeBoard} />
      <View style={styles.buttonContainer}>
        <TButton title="Rules" page='Rules' />
        <TButton title="Credits" page='Credits' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 10,
    borderColor: COLOR.WHITE,
    backgroundColor: COLOR.LIGHTGREY,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  }
});