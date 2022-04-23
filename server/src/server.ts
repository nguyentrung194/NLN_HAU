import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import BookingsRoute from './routes/bookings.route';
import ExpensesRoute from './routes/expenses.route';
import ReportBookingsRoute from './routes/reportBooking.route';
import RoomsRoute from './routes/rooms.route';
import RoomTypesRoute from './routes/roomType.route';
import StocksRoute from './routes/stocks.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new BookingsRoute(),
  new RoomsRoute(),
  new StocksRoute(),
  new RoomTypesRoute(),
  new ExpensesRoute(),
  new ReportBookingsRoute(),
]);

app.listen();
