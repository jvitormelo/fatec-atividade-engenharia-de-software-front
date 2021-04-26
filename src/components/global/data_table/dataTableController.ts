import { useEffect } from 'react';

function DataTableController({ ...props }: any) {
  function mountHandler() {
    console.log(props);
  }
  useEffect(() => {
    mountHandler();
  }, []);

  return {};
}
export default DataTableController;
