import { CardTools } from "../components/Card/Card";
import { useTools } from "../hooks/get/useDashboardTools";

function Tools() {
    const { tools} = useTools();


    return (
        <div className="containerTools">
            {tools?.map(tool => (
            <CardTools logo={tool.icon_url} title={tool.name} data={tool.status} text={tool.description}/>
        ))}
        </div>
    )

  }
  
  export default Tools