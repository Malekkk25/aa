import { Grid } from "@mui/material";
import CategoryPerformance from "../components/dashboard/CategoryPerformance";


const CategoryTable = () => {
  return (<div>
    
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <CategoryPerformance/>
      </Grid>
    </Grid>
   
    </div>
  );
};

export default CategoryTable;
