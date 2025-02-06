import react from 'react';
import { createRoot } from 'react-dom/client';
import {NetworkService} from './services/network';

const App = () => {
    const [title, setTitle] = react.useState<string>('Client says hello');

    react.useEffect(() => {
        const getTitle = async () => {
            try {
                const serverTitle = await NetworkService.getInstace().getTitle();
                setTitle(serverTitle.title);
            } catch (e) {
                console.error(e);
            }
        }

        getTitle();
    }, [])

    return (<h1>
        {title}
    </h1>);
}

const domNode = document.getElementById("root")
const root = createRoot(domNode as HTMLDivElement);

root.render(<App/>);
