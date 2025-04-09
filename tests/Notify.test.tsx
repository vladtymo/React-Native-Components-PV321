import { render, screen, waitFor, fireEvent } from "@testing-library/react-native";
import NotifyExample from "../app/(tabs)/notify";
import * as Notifications from 'expo-notifications';

jest.mock('expo-notifications');
const mockedNotifications = Notifications as jest.Mocked<typeof Notifications>;

describe("ProductList", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // clean slate before each test

    });

    it("renders correctly", async () => {
        render(<NotifyExample />);

        expect(await screen.findByText("Notification Example")).toBeTruthy();
    });

    it("notification scheduled for now correctly", async () => {
        render(<NotifyExample />);

        const btn = screen.getByTestId('notifyNowBtn');
        expect(btn).toBeOnTheScreen();

        fireEvent.press(btn);

        expect(mockedNotifications.scheduleNotificationAsync)
            .toHaveBeenCalledTimes(1);

        expect(mockedNotifications.scheduleNotificationAsync)
            .toHaveBeenCalledWith(expect.objectContaining({
                trigger: null
            }))
    });
});
