import assert from "assert";
import {Meteor} from "meteor/meteor";
import {Receipts} from "../imports/api/collections/Receipts";
import {FilesCollection} from "meteor/ostrio:files";
import Upload from "../imports/ui/components/Upload";


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
    }
    it("request collection exists", async function () {
        let collection = null;
        collection = Receipts.collection;
        assert(collection !== null);
    });
    it("insert png", async function () {
        // Upload sample files on server's startup:
        Receipts.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {
            fileName: 'logo.png'
        }, function (writeError, fileRef) {
            if (writeError) {
                throw writeError;
            } else {
                assert(fileRef._id !== null);
            }
        });
    });
    it("insert jpeg", async function () {
        // Upload sample files on server's startup:
        Receipts.load('https://image.shutterstock.com/image-vector/credit-card-icon-600w-397400254.jpg', {
            fileName: 'jpeg img'
        }, function (writeError, fileRef) {
            if (writeError) {
                throw writeError;
            } else {
                assert(fileRef._id !== null);
            }
        });
    });
    it("insert gif", async function () {
        // Upload sample files on server's startup:
        Receipts.load('https://media3.giphy.com/media/BfbUe877N4xsUhpcPc/giphy.gif?cid=ecf05e47olmz6aso6rvn28w3dy8401e7jqs2auavdfpmx0rf&rid=giphy.gif', {
            fileName: 'gif img'
        }, function (writeError, fileRef) {
            if (writeError) {
                throw writeError;
            } else {
                assert(fileRef._id !== null);
            }
        });
    });
    it("insert large image", async function () {
        // Upload sample files on server's startup:
        Receipts.load('https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg', {
            fileName: 'gif img'
        }, function (writeError, fileRef) {
            if (writeError) {
                throw writeError;
            } else {
                assert(fileRef._id !== null);
            }
        });
    });
});
