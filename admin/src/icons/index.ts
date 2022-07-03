
import SvgIcon from "@/components/SvgIcon.vue";
import {App} from "vue"; // svg component


export function createIcon(app:App){
  // register globally
  app.component("svg-icon", SvgIcon);

  const req = import.meta.globEager('./svg/*.svg',{as:'raw'});
// const requireAll = requireContext => requireContext.keys().map(requireContext);
// requireAll(req);
  console.log(req)
}

