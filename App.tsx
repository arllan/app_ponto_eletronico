import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export default function App() {
  const [data, setData] = useState<any>({});

  function onSuccess(val: any) {
    console.log('Entrou no principal', val);
  }

  useEffect(() => {
    console.log('entrou no effetcs', data);
  }, [data]);

  return (
    <QRCodeScanner
      reactivateTimeout={500}
      cameraTimeout={0}
      reactivate={true}
      onRead={val => {
        onSuccess(val), setData(val);
      }}
      // type={RNCamera.Constants.Type.front}
      cameraType="back"
      showMarker={true}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>{data.data}</Text> Dados acima
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
