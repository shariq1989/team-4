import assert from "assert";
import { shallowMount } from '@vue/test-utils'


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
    it("package.json has correct name", async function () {
        const {name} = await import("../package.json");
        assert.strictEqual(name, "receipt-catcher");
    });
    it("package.json has correct name", async function () {
        const {name} = await import("../package.json");
        assert.strictEqual(name, "receipt-catcher");
    });

});
