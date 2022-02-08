import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IProfile } from "../interfaces/profile/profile.interface";

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel('Profile') private readonly profileModel: Model<IProfile>,
  ) {}

  public async searchProfile(params?: { userId: string, firstName?: string, lastName?: string }): Promise<IProfile[]> {
    return this.profileModel.find(params).exec();
  }

  public async searchProfileById(id: string): Promise<IProfile> {
    return this.profileModel.findById(id).exec();
  }

  public async updateProfileById(
    id: string,
    userParams: { firstName: string, lastName: string },
  ): Promise<IProfile> {
    return this.profileModel.updateOne({ _id: id }, userParams).exec();
  }

  public async createProfile(profile: IProfile): Promise<IProfile> {
    const userModel = new this.profileModel(profile);
    return await userModel.save();
  }
}