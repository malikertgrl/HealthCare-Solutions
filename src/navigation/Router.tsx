import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AddPlan from '../screens/AddPlan';
import {NavigationContainer} from '@react-navigation/native';
import {
  AddPlanIcon,
  CalenderActive,
  CalenderIcon,
  HomeActive,
  HomeIcon,
  MessageActive,
  MessageIcon,
  UserActive,
  UserIcon,
} from '../common/assets';
import Calender from '../screens/Calender';
import Message from '../screens/Message';
import User from '../screens/User';
import {View} from 'react-native';
import {Layout} from '../common/constants';

const Tab = createBottomTabNavigator();

export function Router() {
  const screenOptions = {
    tabBarStyle: {
      backgroundColor: '#0000ff',
      height: 100,
    },
    tabBarItemStyle: {
      backgroundColor: '#00ff00',
      margin: 5,
      borderRadius: 10,
    },
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabel: () => {
            return null;
          },
          tabBarStyle: {
            borderTopWidth: 0,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <HomeActive /> : <HomeIcon />,
          }}
        />
        <Tab.Screen
          name="Calender"
          component={Calender}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <CalenderActive /> : <CalenderIcon />,
          }}
        />
        <Tab.Screen
          name="AddPlan"
          component={AddPlan}
          options={{
            tabBarStyle: {display: 'none'},
            tabBarItemStyle: {
              backgroundColor: '#1BD15D',
              width: 56,
              height: 56,
              // aspectRatio: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 18,
            },
            tabBarIcon: () => <AddPlanIcon fill="white" />,
          }}
        />

        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <MessageActive /> : <MessageIcon />,
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <UserActive /> : <UserIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
