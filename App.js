
import { StyleSheet, View, Dimensions, Text,} from 'react-native';
// import faker from 'faker';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import  React ,{ useState } from 'react';
import Posts from './Posts';


const SCREEN_WIDTH = Dimensions.get('window').width;

const App = () => {

  
    // console.log(res.categories[0].videos[0].sources[0]);
      
   
    const fakeData = [];
    const runu = async() =>
    {
      const url = "https://sendeyo.com/updownload/file/script/d2475e9ee7e21faaeb87203cd81fffc5.json";
    
      
      const js = await fetch(url);
      const res = await js.json();
      console.log(res);
    


    for(i = 0; i < 10; i+= 1) {
      fakeData.push({
        type: 'NORMAL',
        item: {
          id: i,
          url:res.categories[0].videos[i].sources[0],
          //  url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",          
        },
      });
    }
    }
    runu();

    const [state] = useState({
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    });

    const layoutProvider = new LayoutProvider((i) => {
      return state.list.getDataForIndex(i).type;
    }, (type, dim) => {
      switch (type) {
        case 'NORMAL': 
          dim.width = SCREEN_WIDTH;
          dim.height = 500 ;
          break;
        default: 
          dim.width = 0;
          dim.height = 0;
          break;
      };
    })
  

 const rowRenderer = (type, data) => {
    const { url } = data.item;
    return (
      <View  style={styles.listItem}>
        {console.log(url)}
             <Posts url={url} />
        </View>
      
    )
  }

  
    return (
      <View style={styles.container}>
        <RecyclerListView
          style={{flex: 1}}
          rowRenderer={rowRenderer}
          dataProvider={state.list}
          layoutProvider={layoutProvider}
        />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    minHeight: 1,
    minWidth: 1,
  },
  listItem: {
    flexDirection: 'row',
    // margin: 10,
    // width:'100%',
    // height:'100%',
    // backgroundColor: 'cyan',
    
  }
});

export default App;


