import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import RoomsRoute from './routes/rooms.route';
import BookingsRoute from './routes/bookings.route';
import RoomTypesRoute from './routes/room_types.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new RoomsRoute(),
  new BookingsRoute(),
  new RoomTypesRoute(),
]);

app.listen();
