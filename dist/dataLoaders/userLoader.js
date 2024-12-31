"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoader = void 0;
const __1 = require("..");
const dataloader_1 = __importDefault(require("dataloader"));
const batchUsers = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    // ids: [10, 11, 12, 13]
    console.log(ids);
    const users = yield __1.prisma.user.findMany({
        where: {
            id: {
                in: ids
            }
        }
    });
    console.log("users: ", users);
    /*
    {
        1: {id: 1, name: fahim}
        2: {id: 2, name: fahim}
        4: {id: 4, name: fahim}
        10: {id: 10, name: fahim}
        3: {id: 3, name: fahim}
    }
    */
    const userData = {};
    users.forEach((user) => {
        userData[user.id] = user;
    });
    console.log(userData);
    return ids.map((id) => userData[id]);
});
//@ts-ignore
exports.userLoader = new dataloader_1.default(batchUsers);
