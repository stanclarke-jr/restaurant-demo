import { reservationData } from '../data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import '../timepicker.css';
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';
import { useState } from 'react';

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('10:00');

  const { title, subtitle, modelImg, btnText } = reservationData;

  return (
    <section className="relative top-96 z-30 pb-20 lg:py-[100px]">
      <div className="container mx-auto">
        {/* Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={'show'}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className="h2 capitalize"
          >
            {title}
          </motion.h2>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className="mb-8 text-dark"
          >
            {subtitle}
          </motion.p>
          {/* Separator */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className="mb-8 flex justify-center"
          >
            <img src={modelImg} alt="" />
          </motion.div>
        </motion.div>
        {/* Reservation form */}
        <motion.form
          variants={fadeIn('up', 'tween', 0.2, 1.6)}
          initial="hidden"
          whileInView={'show'}
        >
          <div className="mb-8 flex flex-col items-center justify-between gap-y-4 lg:flex-row">
            {/* Date picker */}
            <div className="mb-5">
              <div className="mb-2 flex items-center gap-x-[10px] text-base font-semibold text-dark">
                <FaCalendar />
                <div>Choose a date:</div>
              </div>
              <DatePicker
                className="input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* Time picker */}
            <div className="mb-5">
              <div className="mb-2 flex items-center gap-x-[10px] text-base font-semibold text-dark   ">
                <FaClock />
                <div>Choose a time:</div>
              </div>
              <TimePicker
                className="input"
                clearIcon={false}
                clockIcon={false}
                onChange={setTime}
                value={time}
              />
            </div>
            {/* Customer contact number */}
            <div className="mb-5">
              <div className="mb-2 flex items-center gap-x-[10px] text-base font-semibold text-dark   ">
                <FaUsers />
                <div>How many people?</div>
              </div>
              <input className="input" type="text" placeholder="1" />
            </div>
          </div>
          <div className="mx-auto flex max-w-[316px] justify-center">
            <button className="btn w-full capitalize lg:w-auto">
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
