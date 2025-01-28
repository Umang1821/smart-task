import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Button,
  Grid,
  Typography,
} from '@mui/material';

export default function TaskList({ items, toggleComplete, editItem, deleteItem }) {
  return (
    <Grid container spacing={2} className="mt-6">
      <Grid item xs={12}>
        <Typography variant="h6" align="center" gutterBottom fontFamily={'monospace'} fontSize={22} fontWeight={'bold'}>
          Active Tasks
        </Typography>
        <TaskTable
          items={items.filter((item) => !item.completed)}
          toggleComplete={toggleComplete}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" align="center" gutterBottom fontFamily={'monospace'} fontSize={22} fontWeight={'bold'}>
          Completed Tasks
        </Typography>
        <TaskTable
          items={items.filter((item) => item.completed)}
          toggleComplete={toggleComplete}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      </Grid>
    </Grid>
  );
}

function TaskTable({ items, toggleComplete, editItem, deleteItem }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: '300px', 
        overflowY: 'auto',  
        borderRadius: 2,
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '14px' }}>Name</TableCell>
            <TableCell sx={{ fontSize: '14px' }}>Description</TableCell>
            <TableCell sx={{ fontSize: '14px' }}>Priority</TableCell>
            <TableCell sx={{ fontSize: '14px' }}>Due Date</TableCell>
            <TableCell sx={{ fontSize: '14px' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                Add tasks
              </TableCell>
            </TableRow>
          ) : (
            items.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  backgroundColor: item.completed ? 'lightgreen' : 'white',
                }}
              >
                <TableCell sx={{ fontSize: '14px' }}>{item.name}</TableCell>
                <TableCell sx={{ fontSize: '14px' }}>{item.description}</TableCell>
                <TableCell sx={{ fontSize: '14px' }}>{item.priority}</TableCell>
                <TableCell sx={{ fontSize: '14px' }}>{item.dueDate}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => toggleComplete(item)}
                    variant="contained"
                    color={item.completed ? 'warning' : 'success'}
                  >
                    {item.completed ? 'Pending' : 'Done'}
                  </Button>
                  <EditIcon
                    onClick={() => editItem(item)}
                    style={{ cursor: 'pointer', marginLeft: '8px' }}
                  />
                  <DeleteIcon
                    onClick={() => deleteItem(item.id)}
                    style={{ cursor: 'pointer', marginLeft: '8px', color: 'red' }}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
