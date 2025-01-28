import React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

export default function TaskSummary({ taskCounts }) {
  const data = [
    { value: taskCounts.low, label: "Low Priority", color: "#4caf50" },
    { value: taskCounts.medium, label: "Medium Priority", color: "#ffeb3b" },
    { value: taskCounts.high, label: "High Priority", color: "#f44336" },
  ];

  const hasTasks = taskCounts.low > 0 || taskCounts.medium > 0 || taskCounts.high > 0;

  return (
    <Box className="task-summary-container w-full" sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="h6" sx={{ marginBottom: 3 , fontFamily: "monospace", fontSize: "22px", fontWeight:"bold", color:"white"}}>
        Task Summary
      </Typography>

      {hasTasks ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
          <PieChart
            series={[
              {
                data,
                arcLabel: (item) => `${item.value}`,
                arcLabelMinAngle: 35,
                arcLabelRadius: "60%",
                highlightScope: { fade: "global", highlight: "item" },
                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              },
            ]}
            width={400}
            height={300}
            legend={{ hidden: true }}
          />
        </Box>
      ) : (
        <Typography variant="body2" sx={{ color: "gray" }}>
          No tasks available
        </Typography>
      )}

      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 4, marginTop: -1 }}>
        {data.map((item) => (
          <Box key={item.label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 14,
                height: 14,
                backgroundColor: item.color,
                borderRadius: "50%",
              }}
            />
            <Typography variant="body2" sx={{ color: "white"}}>{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
