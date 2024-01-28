import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../features/counterSlice";
import { Button, Input } from "@mui/material";
import styles from "./counter.module.css";

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <section className={styles.mainSection}>
      <span className={styles.count}>{count}</span>

      <div></div>
      <div>
        <div className={styles.buttonsBlock}>
          <Button variant="contained" onClick={() => dispatch(increment())}>
            +
          </Button>
          <Button variant="contained" onClick={() => dispatch(decrement())}>
            -
          </Button>
          <Button
            variant="contained"
            onClick={() => dispatch(incrementByAmount(+incrementAmount))}
          >
            Add amount
          </Button>
          <div className={styles.countIncrementInterface}>
            <Input
              type="number"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(+e.target.value)}
              className={styles.countInrementDisplay}
            >
            </Input>
            <div className={styles.countIncrementButtons}>
              <Button
                sx={{ width: 36, maxHeight: 18, padding: 0 }}
                onClick={() => setIncrementAmount(incrementAmount + 1)}
              >
                +
              </Button>
              <Button
                sx={{ width: 36, maxHeight: 18, padding: 0 }}
                onClick={() => setIncrementAmount(incrementAmount - 1)}
              >
                -
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterComponent;
