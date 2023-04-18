import { Grid } from "@mui/material";
import ProductsPerformance from "../components/dashboard/ProductsPerformance";
import FullLayout from "../components/layouts/FullLayout";

const ProductTable = () => {
  return (<div>
    
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ProductsPerformance/>
      </Grid>
    </Grid>
   
    </div>
  );
};

export default ProductTable;
