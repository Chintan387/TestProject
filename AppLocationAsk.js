import {Platform, PermissionsAndroid} from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import AndroidOpenSettings from 'react-native-android-open-settings'

const titleAskPermission = 'Stencil App Location Permission'
const messageAskPermssion = 'Stencil App needs access to your location so it can collect information for the study.'

export const askAppLocation = (askAfterNeverAskAgain = false) =>{
    if (Platform.OS === 'android') {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
        .then(data => {
          console.log('RNAndroidLocationEnabler data',data)
          // The user has accepted to enable the location services
          // data can be :
          //  - "already-enabled" if the location services has been already enabled
          //  - "enabled" if user has clicked on OK button in the popup
    
          PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
          .then((permission) => {
            console.log(`android location check permission result: ${JSON.stringify(permission)}`);
            if(permission)
            {
                this.getLatlng()
            }
            else{
                PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                      title: titleAskPermission,
                      message: messageAskPermssion,
                                 buttonPositive: 'OK',
                    }
                  )
                    .then((result) => {
                      console.log(`android location permission result: ${JSON.stringify(result)}`);
                      if(result === 'granted')
                      {
                      this.getLatlng()
                      }
                    //   else if(result === 'never_ask_again')
                    //   {
                    //     console.log('No Location because never Ask Again')
                    //     AndroidOpenSettings.locationSourceSettings()
                    //   }
                      else{
                        console.log('No Location because User Denied')
                      }
                    })
                    .catch((result) => {
                      console.log(`something went wrong getting android location permissions ${JSON.stringify(result)}`);
                      console.log('No Location because Exception')
                    });
            }
          }).catch((error)=>{
            console.log('No Location because Exception')
          })

        }).catch(err => {
          console.log('RNAndroidLocationEnabler err',err)
          console.log('No Location because Exception')
        });
      }
      else{
        this.getLatlng()
      }
}

getLatlng = () =>{
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('navigator.geolocation',position)
      })
}