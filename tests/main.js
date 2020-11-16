import assert from "assert";
import {shallowMount} from '@vue/test-utils'
import {Meteor} from "meteor/meteor";
import {Receipts} from "../imports/api/collections/Receipts";
import {FilesCollection} from "meteor/ostrio:files";

describe("receipt-catcher", function () {
    it("package.json has correct name", async function () {
        const {name} = await import("../package.json");
        assert.strictEqual(name, "receipt-catcher");
    });
    if (Meteor.isClient) {
        it("client is not server", function () {
            assert.strictEqual(Meteor.isServer, false);
        });
    }

    if (Meteor.isServer) {
        it("server is not client", function () {
            assert.strictEqual(Meteor.isClient, false);
        });
        it("adding file to collection", function () {
            import fs from 'fs';
            import {FilesCollection} from 'meteor/ostrio:files';

            fs.readFile('/var/mob.png', function (error, data) {
                if (error) {
                    throw error;
                } else {
                    Receipts.write(data, {
                        fileName: 'mob.png',
                        fielId: 'abc123myId', //optional
                        type: 'image/png'
                    }, function (writeError, fileRef) {
                        if (writeError) {
                            throw writeError;
                        } else {
                            assert(fileRef._id !== null);
                        }
                    });
                }
            });
        });
        it("adding non file to collection", function () {
            import fs from 'fs';
            import {FilesCollection} from 'meteor/ostrio:files';

            fs.readFile('/var/mongodb-compass_1.23.0_amd64.deb', function (error, data) {
                if (error) {
                    throw error;
                } else {
                    Receipts.write(data, {
                        fileName: 'mongodb-compass_1.23.0_amd64.deb',
                        fielId: 'abc123myId', //optional
                        type: 'deb'
                    }, function (writeError, fileRef) {
                        if (writeError) {
                            throw writeError;
                        } else {
                            assert(fileRef._id !== null);
                        }
                    });
                }
            });
        });
    }
    it("request collection exists", async function () {
        let collection = null;
        collection = Receipts.collection;
        assert(collection !== null);
    });
});