import react from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './components/app/app';
import { WithAppWrappers } from './components/appWrappers/appwrappers'

const domNode = document.getElementById("root")
const root = createRoot(domNode as HTMLDivElement);

root.render(<WithAppWrappers><App/></WithAppWrappers>);
