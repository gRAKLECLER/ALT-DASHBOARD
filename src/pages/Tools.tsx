import axios from "axios";
import { useEffect, useState } from "react";
import type { Tools as ToolsType } from "../types/tools";
import { CardTools } from "../components/Card/Card";

function Tools() {
    const [tools, setTools] = useState<ToolsType[]>()


    useEffect(() => {
    
          axios
            .get<ToolsType[]>(
              'https://tt-jsonserver-01.alt-tools.tech/tools'
            )
            .then(res => setTools(res.data))
            .catch(err => {
              console.error('Erreur API analytics', err);
            });
      }, []);

    return (
        <div className="containerTools">
            {tools?.map(tool => (
            <CardTools logo={tool.icon_url} title={tool.name} data={tool.status} text={tool.description}/>
        ))}
        </div>
    )

  }
  
  export default Tools