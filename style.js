import react, {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
	  },
	  bottomBar: {
	    position: 'absolute',
	    bottom: 0,
	    left: 0,
	    right: 0,
	    backgroundColor: 'rgba(0,0,0,0.5)',
	    padding: 15,
	    flexDirection: 'row',
	  },
	  url: {
	    flex: 1,
	  },
	  urlText: {
	    color: '#fff',
	    fontSize: 20,
	  },
	  cancelButton: {
	    marginLeft: 10,
	    alignItems: 'center',
	    justifyContent: 'center',
	  },
	  cancelButtonText: {
	    color: 'rgba(255,255,255,0.8)',
	    fontSize: 18,
	  },

	  oneThreeScan: {
		  zIndex:9999, 
	      //borderWidth:2,
	      //borderColor: 'white',
	      backgroundColor: 'white',
	      height: 200,
	      flex:1,
	      opacity: 0.5
	  },

	  middleScan: {
	  	zIndex:9999, 
        borderWidth:4,
        borderColor: '#25a176',
        width: 200,
        height: 200,
    },
    threeContRow: {
    	flexDirection:'row', 
        justifyContent:'center',
        alignItems: 'center',
        height: 200,
        //borderColor:'blue',
        //borderWidth: 2
    },
    OneThreeCol: {
    	zIndex:9999,
        //borderWidth:2,
        //borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        //opacity: 0.3,
        width: Dimensions.get('window').width,
        height: 150,
        //borderColor:'red',
        //borderWidth: 2
    },
    threeContCol: {
    	flex: 15,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttomLogo: {
    	height: 100,
    	backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'        
    },
    ScannerCont: {
    	flex: 1,
    	flexDirection: 'column',
    	justifyContent: 'flex-end',
    	alignItems: 'stretch'
    },
    QrText: {
    	color: 'white',
    	fontWeight: 'bold',
    	fontSize: 20,
    	
    },
    QrTextCont: {
    	flexDirection: 'row',
    	justifyContent: 'center',
    	alignItems: 'flex-end',
    	paddingBottom: 20,
    	//marginVertical: 25,
    	paddingBottom: 25   	
    	
    },
    topText: {
       	backgroundColor: '#32475b',
    	//padding: 30,    	
    	paddingTop: 35,
    	paddingBottom: 40,
    	paddingHorizontal: 20,
    	//marginVertical: 25,
    	alignItems:'stretch',
    	
    },

    textStyle: {
        height:30,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        
    },
    textShow: {
    	height:30,
    	borderBottomColor: 'white',
    	borderBottomWidth: 1,
        color: 'white'
    	
    },
    orStyle: {
    	flexDirection: 'column',
    	justifyContent: 'center',
    	alignItems: 'center',  
    	width:Dimensions.get('window').width,  
    	position:'absolute', 
    	zIndex:9999,  
    	top:80,
    	flex: 3

    },
    result: {
        color: '#32475b',
        marginRight: 8
    },
    resultCont: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderColor: 'red',
        // borderWidth: 2,
        padding: 5,
        marginHorizontal: 7,
        borderBottomWidth: 1,
        borderColor: 'rgba(50, 71, 91, 0.3)',
        zIndex: 9999999999999


    }

})