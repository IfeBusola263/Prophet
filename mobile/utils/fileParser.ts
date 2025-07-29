import XLSX from 'xlsx';
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

export async function parseFile(file: {
  uri: string;
  type?: string;
  name?: string;
}) {
  let fileData: string | ArrayBuffer;

  if (Platform.OS === 'ios') {
    fileData = await RNFS.readFile(
      decodeURIComponent(file.uri.replace('file://', '')),
      'base64',
    );
  } else {
    fileData = await RNFS.readFile(file.uri, 'base64');
  }

  const workbook = XLSX.read(fileData, { type: 'base64' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  return json;
}
