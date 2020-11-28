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
    it("insert receipt", async function () {
        const file = Receipts.load("https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png", {
            fileName: 'receipt.png'
        });
        //console.log(file)
    });
    it("upload another", async function () {
        let image = 'not null';
        //console.log(this.image);
        //Upload.uploadAnotherReceipt();
        //assert.equal(this.image, null);
    });
    it("receipts exists", async function () {
        const recs = Receipts.find()
        //console.log(recs.count())
        //assert.equal(Receipts.find().count(), 3);
    });
});