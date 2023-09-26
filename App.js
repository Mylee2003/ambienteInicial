import Register from './components/register';
import Login from './components/login';
import { ScrollView } from 'react-native';
export default function App(){
	return(
    <ScrollView>
<Login/>
<Register/>
    </ScrollView>
	
	)
}