import mailController from "../controller/mailController";

const router = express.Router();
router.post('/sendmail',[auth, admin],mailController);
