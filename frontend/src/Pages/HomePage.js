import React, { useState } from "react";
import ReactLoading from "react-loading";
import FilterSelector from "../components/Filters/FilterSelector";
import DataTable from "../components/DataTable/DataTable";
import BarChart from "../components/Charts/BarChart";
import PolarCharts from "../components/Charts/PolarCharts";
import { Button } from "react-bootstrap";
import CommonDatePicker from "../components/DateSelector/CommonDatePicker";

function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState("tramos");
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const formattedStartDate = startDate.toISOString().split("T")[0];
      const formattedEndDate = endDate.toISOString().split("T")[0];

      // Realiza la solicitud a la API según el filtro seleccionado y las fechas
      const response = await fetch(`http://localhost:4000/${selectedFilter}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fechainicial: formattedStartDate,
          fechafinal: formattedEndDate,
        }),
      });
      const result = await response.json();
      setData(result);
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error al cargar datos:", error);
      throw error;
    }
    finally {
      setIsLoading(false);
    }
  };

  const handleFilterClick = () => {
    fetchData();
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Visualización de datos</h1>
      <div className="d-flex justify-content-between my-3 mx-2 align-items-center">
        <FilterSelector filters={['tramos', 'cliente', 'tramos-cliente']} onFilterChange={setSelectedFilter} />
        <div className="d-flex flex-column">
          <label>Fecha Inicial</label>
          <CommonDatePicker
            selectedDate={startDate}
            onDateChange={setStartDate}
            placeholder="Fecha Inicial"
          />
        </div>
        <div className="d-flex flex-column">
          <label>Fecha Final</label>
          <CommonDatePicker
            selectedDate={endDate}
            onDateChange={setEndDate}
            placeholder="Fecha Final"
          />
        </div>
        <Button onClick={handleFilterClick}>Filtrar</Button>
      </div>
      
      {isLoading ? (
        <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center m-5">
          <ReactLoading type={"spokes"} color="#0d6efd" width={100} height={100}/>
          <label>Cargando información</label>
        </div>
      ) : data.length > 0 ? (
        <>
          <DataTable data={data} />
          { selectedFilter === 'tramos' ? (
            <BarChart data={data} />
          ): selectedFilter == 'cliente' ? (
            <PolarCharts data={data} />
          ) : (
            <p></p>
          )
          }
        </>
      ) : (
        <p>No hay datos disponibles.</p>
      )}
      
    </div>
  );
}

export default HomePage;
