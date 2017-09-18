package server.utils;

import java.util.Date;

public class DateComparer {

    public DateComparer() {

    }

    /**
     * Return true if date1 is earlier than date2
     *
     * @param date1
     * @param date2
     * @return
     */
    public boolean dateEarlier(Date date1, Date date2) {
        return date1.compareTo(date2) >= 0;
    }

    /**
     * Check if the date Start is holder than the date End.
     * If the date Start is holder, the function return true
     * else it return false.
     *
     * @param start
     * @param end
     * @return
     */
    public static boolean dateValidator(Date start, Date end) {
        DateComparer dc = new DateComparer();

        return !dc.dateEarlier(start, end);

    }

    /**
     * The function calculate the difference between the current time
     * and the date send in parameters.
     * If the min time send in parameters isn't over,
     * the function return true else it return false.
     *
     * @param date
     * @param minutes
     * @param hours
     * @return
     */
    public static boolean compareDateByTime(Date date, int minutes, int hours) {
        Date currentDate = new Date();

        long diff = Math.abs(currentDate.getTime() - date.getTime());
        long diffMinutes = diff / 60000 % 60;
        long diffHours = diff / 3600000;

        return diffHours <= hours && diffMinutes < minutes;
    }

    public static int getDaysBetweenDates(Date dateStart, Date dateEnd){
        return (int)( (dateStart.getTime() - dateEnd.getTime()) / (86400000));
    }
}
